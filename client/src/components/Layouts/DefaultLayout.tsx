"use client";
import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import ParkingProvider from "@/context/parking/ParkingProvider";
export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  //============falta implementar==========================

  /*
 const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Simular comprobación de sesión
    const checkAuth = () => {
      const userLoggedIn = false; // Aquí debes reemplazarlo con la lógica real de autenticación
      if (!userLoggedIn) {
        router.push("/auth/signin");
      } else {
        setIsLoggedIn(true);
      }
    };
    checkAuth();
  }, [router]);

  if (!isLoggedIn) {
    return null; // Muestra nada mientras se verifica la autenticación
  }
*/

  return (
    <>
      <ParkingProvider>
        {/* <!-- ===== Page Wrapper Start ===== --> */}
        <div className="flex">
          {/* <!-- ===== Sidebar Start ===== --> */}
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          {/* <!-- ===== Sidebar End ===== --> */}

          {/* <!-- ===== Content Area Start ===== --> */}
          <div className="relative flex flex-1 flex-col lg:ml-72.5">
            {/* <!-- ===== Header Start ===== --> */}
            <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            {/* <!-- ===== Header End ===== --> */}

            {/* <!-- ===== Main Content Start ===== --> */}
            <main className="min-h-screen">
              <div className="mx-auto mb-96  max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                {children}
              </div>
            </main>
            {/* <!-- ===== Main Content End ===== --> */}
          </div>
          {/* <!-- ===== Content Area End ===== --> */}
        </div>
        {/* <!-- ===== Page Wrapper End ===== --> */}
      </ParkingProvider>
    </>
  );
}
