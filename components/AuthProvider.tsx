"use client";
import Loader from "@/components/loader";
import { retrieveUser } from "@/redux/authSlice";
import { RootState } from "@/redux/store";
import styled from "@emotion/styled";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; 
  width: 100vw; 
`;
  const router = useRouter();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const auth = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    dispatch(retrieveUser()).finally(() => {
      setLoading(false);
    });
  }, [dispatch]);

  useEffect(() => {
    if (!loading) {
      if (!auth.isAuthenticated) {
        router.push("/login/");
      }
    }
  }, [auth.isAuthenticated, loading, router]);

  if (loading) {
    return <LoaderContainer><Loader size={70}></Loader></LoaderContainer>;
  }

  return <>{auth.isAuthenticated && children}</>;
}
