"use client";
import {useEffect} from "react";
export function ReducedMotion(){useEffect(()=>{if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.dataset.reducedMotion='true';},[]);return null;}
