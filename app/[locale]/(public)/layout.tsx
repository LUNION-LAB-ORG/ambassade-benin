



import Footer from "@/components/partials/footer/Footer";
import Header from "@/components/partials/header";
import { cn } from "@/lib/utils";

const LayoutPublic = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={cn(
        "flex min-h-svh w-full flex-col bg-default-100 dark:bg-background mx-auto max-w-screen-2xl"
      )}
    >
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default LayoutPublic;
