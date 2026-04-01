const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-background">
      <div className="container mx-auto px-4 text-center">
        <p className="font-display text-sm text-muted-foreground tracking-wider">
          © {new Date().getFullYear()} Memorex90. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
