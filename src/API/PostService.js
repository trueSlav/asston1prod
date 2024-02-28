export default class PostService {
  static async getAll() {
    let res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return await res.json();
  }
}
