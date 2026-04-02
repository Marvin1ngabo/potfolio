import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Phone, Mail, Clock, Calendar, Globe } from "lucide-react";

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactForm = ({ isOpen, onClose }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactMethod: "email" as "email" | "phone",
    phone: "",
    preferredDate: "",
    preferredTime: "",
    duration: "30" as "15" | "30" | "60",
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    callType: "consultation" as "consultation" | "project-discussion" | "technical-review" | "other",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      setFormData({ 
        name: "", 
        email: "", 
        contactMethod: "email", 
        phone: "", 
        preferredDate: "",
        preferredTime: "", 
        duration: "30",
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        callType: "consultation",
        message: "" 
      });
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed left-1/2 top-[8%] z-50 w-[90vw] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-border bg-card shadow-2xl"
          >
            <div className="p-3 md:p-4">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
                  <Calendar className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground">Call Request Sent!</h3>
                <p className="mt-2 text-sm text-muted-foreground">I'll review your request and get back to you within 24 hours to confirm the call details.</p>
              </motion.div>
            ) : (
              <>
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-xl font-display font-semibold text-foreground">Schedule a Call</h2>
                  <button onClick={onClose} className="rounded-lg p-2 text-muted-foreground hover:bg-muted transition-colors">
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-2">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-foreground/80">Name</label>
                    <input
                      required
                      maxLength={100}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-lg border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-shadow"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium text-foreground/80">Email</label>
                    <input
                      required
                      type="email"
                      maxLength={255}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-lg border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-shadow"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-foreground/80">Preferred Contact</label>
                    <div className="flex gap-3">
                      {[
                        { value: "email" as const, icon: Mail, label: "Email" },
                        { value: "phone" as const, icon: Phone, label: "Phone" },
                      ].map(({ value, icon: Icon, label }) => (
                        <button
                          key={value}
                          type="button"
                          onClick={() => setFormData({ ...formData, contactMethod: value })}
                          className={`flex flex-1 items-center justify-center gap-2 rounded-lg border px-4 py-2.5 text-sm transition-all ${
                            formData.contactMethod === value
                              ? "border-accent bg-accent/10 text-accent"
                              : "border-border bg-secondary text-muted-foreground hover:border-muted-foreground/30"
                          }`}
                        >
                          <Icon className="h-4 w-4" />
                          {label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {formData.contactMethod === "phone" && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}>
                      <label className="mb-1 block text-sm font-medium text-foreground/80">Phone Number</label>
                      <input
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-lg border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-shadow"
                        placeholder="+1 (555) 000-0000"
                      />
                    </motion.div>
                  )}

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-foreground/80">Call Type</label>
                    <select
                      required
                      value={formData.callType}
                      onChange={(e) => setFormData({ ...formData, callType: e.target.value as typeof formData.callType })}
                      className="w-full rounded-lg border border-border bg-secondary px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-shadow"
                    >
                      <option value="consultation">General Consultation</option>
                      <option value="project-discussion">Project Discussion</option>
                      <option value="technical-review">Technical Review</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div>
                      <label className="mb-1 flex items-center gap-1.5 text-sm font-medium text-foreground/80">
                        <Calendar className="h-3.5 w-3.5" /> Preferred Date
                      </label>
                      <input
                        required
                        type="date"
                        min={new Date().toISOString().split('T')[0]}
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full rounded-lg border border-border bg-secondary px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-shadow"
                      />
                    </div>

                    <div>
                      <label className="mb-1 flex items-center gap-1.5 text-sm font-medium text-foreground/80">
                        <Clock className="h-3.5 w-3.5" /> Preferred Time
                      </label>
                      <input
                        required
                        type="time"
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full rounded-lg border border-border bg-secondary px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-shadow"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div>
                      <label className="mb-1 block text-sm font-medium text-foreground/80">Duration</label>
                      <select
                        value={formData.duration}
                        onChange={(e) => setFormData({ ...formData, duration: e.target.value as typeof formData.duration })}
                        className="w-full rounded-lg border border-border bg-secondary px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-shadow"
                      >
                        <option value="15">15 minutes</option>
                        <option value="30">30 minutes</option>
                        <option value="60">1 hour</option>
                      </select>
                    </div>

                    <div>
                      <label className="mb-1 flex items-center gap-1.5 text-sm font-medium text-foreground/80">
                        <Globe className="h-3.5 w-3.5" /> Timezone
                      </label>
                      <input
                        value={formData.timezone}
                        onChange={(e) => setFormData({ ...formData, timezone: e.target.value })}
                        className="w-full rounded-lg border border-border bg-secondary px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-shadow"
                        placeholder="e.g. America/New_York"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium text-foreground/80">Additional Notes (optional)</label>
                    <textarea
                      maxLength={1000}
                      rows={2}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full resize-none rounded-lg border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-shadow"
                      placeholder="What would you like to discuss? Any specific topics or questions?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-accent py-3 text-sm font-semibold text-accent-foreground hover:brightness-110 transition-all"
                  >
                    <Calendar className="h-4 w-4" />
                    Schedule Call
                  </button>
                </form>
              </>
            )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactForm;
