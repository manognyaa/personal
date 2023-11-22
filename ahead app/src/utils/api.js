export async function fetchItems(page) {
    // Replace with your actual API endpoint
    const response = await fetch(`https://yourapi.com/items?page=${page}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return await response.json();
}
