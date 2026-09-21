export function get<T>(key: string): T | null {
    if (!isAvailable()) return null;

    const raw = window.localStorage.getItem(key);
    if (raw === null) return null;

    try {
        return JSON.parse(raw) as T;
    } catch {
        return null;
    }
}

export function set<T>(key: string, value: T): void {
    if (!isAvailable()) return;

    window.localStorage.setItem(key, JSON.stringify(value));
}

export function update<T>(key: string, updater: (current: T | null) => T): void {
    set(key, updater(get<T>(key)));
}

export function remove(key: string): void {
    if (!isAvailable()) return;

    window.localStorage.removeItem(key);
}

export function clear(): void {
    if (!isAvailable()) return;

    window.localStorage.clear();
}

function isAvailable(): boolean {
    return typeof window !== 'undefined' && !!window.localStorage;
}