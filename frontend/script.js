async function search() {
  const value = document.getElementById('search').value;

  const res = await fetch(`http://localhost:3000/api/users?name=${value}`);
  const data = await res.json();

  const list = document.getElementById('results');
  list.innerHTML = '';

  data.forEach(user => {
    const li = document.createElement('li');
    li.textContent = user.name;
    list.appendChild(li);
  });
}