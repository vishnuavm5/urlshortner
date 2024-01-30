"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";

const Redirect = ({ params }: any) => {
  const router = useRouter();
  const getOriginalUrl = useCallback(async () => {
    try {
      const data = { id: params.id };
      const response = await axios.get("/api/geturl", {
        params: data,
      });
      if (response.data.success) {
        const url = response.data?.url;
        router.push(url);
      }
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  }, [params?.id, router]);
  useEffect(() => {
    getOriginalUrl();
  }, [getOriginalUrl]);

  return <div>page</div>;
};

export default Redirect;
