export const api = {
  async test() {
    const res = await fetch('http://localhost:3000/api/test');
    console.log(res);
    return res.json();
  },
};
