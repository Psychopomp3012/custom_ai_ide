import path from "path";

// Path: backend/data
export const CONFIG_DIR = path.join(process.cwd(), 'data');
export const SETTINGS_FILE = path.join(CONFIG_DIR, 'settings.json');
export const WORKSPACE_DIR = path.join(process.cwd(), 'workspace');