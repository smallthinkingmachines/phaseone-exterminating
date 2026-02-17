"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";

interface Contact {
  id: number;
  name: string;
  phone: string;
  email: string;
  address: string | null;
  hearAbout: string | null;
  message: string;
  createdAt: string | null;
  read: number | null;
}

interface Subscriber {
  id: number;
  email: string;
  name: string | null;
  source: string | null;
  createdAt: string | null;
}

export default function AdminDashboardPage() {
  const router = useRouter();
  const [tab, setTab] = useState<"contacts" | "subscribers">("contacts");
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Contact | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    setLoading(true);
    const res = await fetch(
      `/api/admin/submissions?tab=${tab}&search=${encodeURIComponent(search)}`
    );
    if (res.status === 401) {
      router.push("/admin");
      return;
    }
    const data = await res.json();
    if (tab === "contacts") {
      setContacts(data.contacts ?? []);
      setUnreadCount(data.unreadCount ?? 0);
    } else {
      setSubscribers(data.subscribers ?? []);
    }
    setLoading(false);
  }, [tab, search, router]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const toggleRead = async (id: number, currentRead: number) => {
    await fetch("/api/admin/submissions", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, read: currentRead === 1 ? 0 : 1 }),
    });
    setContacts((prev) =>
      prev.map((c) => (c.id === id ? { ...c, read: currentRead === 1 ? 0 : 1 } : c))
    );
    if (selected?.id === id) {
      setSelected((prev) => prev ? { ...prev, read: currentRead === 1 ? 0 : 1 } : prev);
    }
    setUnreadCount((prev) => prev + (currentRead === 1 ? 1 : -1));
  };

  const handleLogout = async () => {
    await fetch("/api/admin/auth", { method: "DELETE" });
    router.push("/admin");
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            Logout
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6 border-b border-white/10">
          <button
            onClick={() => { setTab("contacts"); setSelected(null); }}
            className={`pb-3 px-1 text-sm font-medium transition-colors ${
              tab === "contacts"
                ? "border-b-2 border-primary text-primary"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Contacts
            {unreadCount > 0 && (
              <span className="ml-2 bg-primary text-white text-xs px-2 py-0.5 rounded-full">
                {unreadCount}
              </span>
            )}
          </button>
          <button
            onClick={() => { setTab("subscribers"); setSelected(null); }}
            className={`pb-3 px-1 text-sm font-medium transition-colors ${
              tab === "subscribers"
                ? "border-b-2 border-primary text-primary"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Subscribers
          </button>
        </div>

        {tab === "contacts" && (
          <>
            {/* Search */}
            <input
              type="text"
              placeholder="Search by name or email..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full md:w-80 px-4 py-2 bg-zinc-900 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary mb-6 text-sm"
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* List */}
              <div className="space-y-2">
                {loading ? (
                  <p className="text-gray-400">Loading...</p>
                ) : contacts.length === 0 ? (
                  <p className="text-gray-400">No submissions found.</p>
                ) : (
                  contacts.map((c) => (
                    <div
                      key={c.id}
                      onClick={() => {
                        setSelected(c);
                        if (!c.read) toggleRead(c.id, 0);
                      }}
                      className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                        selected?.id === c.id
                          ? "border-primary bg-primary/10"
                          : c.read
                          ? "border-white/10 bg-zinc-900 hover:border-white/20"
                          : "border-white/20 bg-zinc-800 hover:border-white/30"
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <p className={`font-medium ${!c.read ? "text-white" : "text-gray-300"}`}>
                            {c.name}
                          </p>
                          <p className="text-sm text-gray-400">{c.email}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-gray-500">
                            {c.createdAt ? new Date(c.createdAt).toLocaleDateString() : "—"}
                          </p>
                          {!c.read && (
                            <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full">
                              New
                            </span>
                          )}
                        </div>
                      </div>
                      <p className="text-sm text-gray-500 mt-1 truncate">{c.message}</p>
                    </div>
                  ))
                )}
              </div>

              {/* Detail */}
              {selected && (
                <div className="bg-zinc-900 border border-white/10 rounded-lg p-6 space-y-4 h-fit">
                  <div className="flex items-start justify-between">
                    <h2 className="text-lg font-semibold">{selected.name}</h2>
                    <button
                      onClick={() => toggleRead(selected.id, selected.read ?? 0)}
                      className="text-xs text-gray-400 hover:text-white transition-colors"
                    >
                      Mark as {selected.read ? "unread" : "read"}
                    </button>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p><span className="text-gray-400">Phone:</span> <a href={`tel:${selected.phone}`} className="text-primary hover:underline">{selected.phone}</a></p>
                    <p><span className="text-gray-400">Email:</span> <a href={`mailto:${selected.email}`} className="text-primary hover:underline">{selected.email}</a></p>
                    {selected.address && <p><span className="text-gray-400">Address:</span> {selected.address}</p>}
                    {selected.hearAbout && <p><span className="text-gray-400">Heard about us:</span> {selected.hearAbout}</p>}
                    <p><span className="text-gray-400">Date:</span> {selected.createdAt ? new Date(selected.createdAt).toLocaleString() : "—"}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Message:</p>
                    <p className="text-white whitespace-pre-wrap">{selected.message}</p>
                  </div>
                </div>
              )}
            </div>
          </>
        )}

        {tab === "subscribers" && (
          <div className="overflow-x-auto">
            {loading ? (
              <p className="text-gray-400">Loading...</p>
            ) : subscribers.length === 0 ? (
              <p className="text-gray-400">No subscribers yet.</p>
            ) : (
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-gray-400 border-b border-white/10">
                    <th className="pb-3 pr-4">Email</th>
                    <th className="pb-3 pr-4">Name</th>
                    <th className="pb-3 pr-4">Source</th>
                    <th className="pb-3">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {subscribers.map((s) => (
                    <tr key={s.id} className="text-gray-300">
                      <td className="py-3 pr-4">{s.email}</td>
                      <td className="py-3 pr-4">{s.name ?? "—"}</td>
                      <td className="py-3 pr-4">{s.source ?? "—"}</td>
                      <td className="py-3">{s.createdAt ? new Date(s.createdAt).toLocaleDateString() : "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
