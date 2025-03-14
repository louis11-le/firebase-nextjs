'use client'
import React, { useState, useEffect } from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

function Page() {
    const { user } = useAuthContext();
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user == null) {
            router.push("/");
        } else {
            setLoading(false);
        }
    }, [user, router]);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    return (<h1>Only logged in users can view this page</h1>);
}

export default Page;