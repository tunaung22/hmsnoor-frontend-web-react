export async function fetchUsers(): Promise<Item[]> {
    try {
        const response = await fetch('/api/users');
        const data: User[] = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}