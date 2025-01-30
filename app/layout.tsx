import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { BreadcrumbDemo } from "@/components/app-breadcrumb"
import { Separator } from "@/components/ui/separator"
import { ThemeProvider } from "@/components/theme-provider"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <AppSidebar />

            <main className="flex flex-col w-full h-screen overflow-hidden">
              <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                <div className="flex items-center gap-2 px-4">
                  <SidebarTrigger />
                  <Separator orientation="vertical" className="mr-2 h-4" />
                  <BreadcrumbDemo />
                </div>
              </header>

              <main className="flex flex-col p-4 pt-0">

                {children}
              </main>
            </main>

          </SidebarProvider>
        </ThemeProvider>  
      </body>
    </html>
  );
}
