const links = ['Home', 'Our Shop', 'Shop Detail', 'Shopping Cart', 'Checkout', 'Contact Us'];

export default function Footer() {
  return (
    <footer className="bg-brand text-white text-xs mt-16">
      <div className="max-w-7xl mx-auto px-4 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-2 lg:col-span-2">
          <p className="opacity-80">Dolore erat dolor sit lorem vero amet. Sed sit lorem magna, ipsum no sit erat lorem et magna ipsum dolore amet erat.</p>
          <p>📍 123 Street, New York, USA</p>
          <p>✉ info@example.com</p>
          <p>☎ +012 345 67890</p>
        </div>
        {[0, 1].map((k) => (
          <div key={k}>
            <h4 className="font-bold mb-3">Quick Links</h4>
            <ul className="space-y-2">{links.map((l) => <li key={l}>› {l}</li>)}</ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/20 text-center py-4">
        © Your Site Name. All Rights Reserved. Designed by HTML Codex
      </div>
    </footer>
  );
}
