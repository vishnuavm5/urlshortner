"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import axios from "axios";

export default function Home() {
  const [url, setUrl] = useState<string>("");
  const [modifiedUrl, setModifiedUrl] = useState<string>("");

  const handleGenerate = useCallback(async () => {
    try {
      const response = await axios.post("/api/urlshort", { url });
      if (response.data.success) {
        setModifiedUrl(response.data?.url);
      }
    } catch (err) {
      console.error(err);
    }
  }, [url]);

  return (
    <div className="flex min-h-screen justify-center items-center">
      <Card>
        <CardHeader>
          <CardTitle>Url Shortner</CardTitle>
          <CardDescription>Please enter the url to shorten</CardDescription>
        </CardHeader>
        <CardContent>
          <Input onChange={(e) => setUrl(e.target.value)} />
          <div className="h-2.5"></div>
          <Button onClick={handleGenerate}>Generate</Button>
        </CardContent>
        <CardFooter>
          <p>{modifiedUrl && modifiedUrl}</p>
        </CardFooter>
      </Card>
    </div>
  );
}
