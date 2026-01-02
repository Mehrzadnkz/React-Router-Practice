import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router";

export default function Dashboard() {
    return (
        <div className="flex justify-center items-center flex-col p-5 gap-4 w-full h-dvh top-0 left-0">
            <h1 className="text-2xl font-bold">Dashboard Page</h1>
            <h1 className="text-xl font-semibold">Click the button below to go to the product page.</h1>
            <Button variant={"default"}><Link to="/Products">Send Me</Link></Button>
        </div>
    );
}