import type { FastifyInstance } from "fastify";
import path from 'path';
import fs from "fs/promises";
import type { Dirent } from "fs";
import { WORKSPACE_DIR } from "../constants.js";

interface FileNode {
    name: string;
    type: 'file' | 'folder';
    fullPath: string;
}

export default async function readCurrentDirectory(app: FastifyInstance) {

    await fs.mkdir(WORKSPACE_DIR, { recursive: true });

    // Query either WORKSPACE_DIR contents or some folder nested within it.
    app.get('/api/read-directory', async (request, response) => {
        try {
            const query = request.query as { folderPath: string };
            const targetFolder = query.folderPath || WORKSPACE_DIR;

            const items: Dirent[] = await fs.readdir(targetFolder, {
                withFileTypes: true // to differentiate between a file and folder with same name
            });

            const files: FileNode[] = items.map(item => ({
                name: item.name,
                type: item.isDirectory() ? 'folder' : 'file',
                fullPath: path.join(targetFolder, item.name) // so we know which path a file in so we can open it in code editor
            }));

            files.sort((a, b) => {
                // Folders on top and Files on bottom
                if (a.type === b.type) return a.name.localeCompare(b.name);
                // Then, sort alphabetically
                return a.type === 'folder' ? -1 : 1;
            })

            return {
                path: targetFolder,
                files: files
            }

        } catch (error) {
            return response.code(500).send({
                error: "failed to read the directory"
            })
        }
    })
}