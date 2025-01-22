'use client '
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";


export const config = defineConfig({
    title:'sanity',
    projectId: 'v8ofyf3c',
    dataset: 'production',
    useCdn: false,
    basePath: '/studio',
    plugins: [structureTool() , visionTool()],
})
