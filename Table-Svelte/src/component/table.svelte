<!-- src/routes/Users.svelte -->
<script>
    import { onMount } from 'svelte';
  
    let users = [];
    let sortBy = '';
    let sortDirection = '';
  
    // Fetch user data from the server endpoint
    async function fetchUsers() {
      const response = await fetch('/');
      users = await response.json();
      console.log(users)
    }
  
    // Sort the users array based on the selected sort options
    function sortUsers() {
      if (sortBy && sortDirection) {
        users = [...users].sort((a, b) => {
          if (sortDirection === 'asc') {
            return a[sortBy] - b[sortBy];
          } else {
            return b[sortBy] - a[sortBy];
          }
        });
      }
    }
  
    // Fetch user data when the component is mounted
    onMount(fetchUsers);
  
    // Watch for changes in sortBy and sortDirection and trigger sorting
    $: {
      sortUsers();
    }
</script>
  
  <h1>Users</h1>
  
  <table>
    <thead>
      <tr>
        <th on:click={() => { sortBy = 'name'; sortDirection = sortDirection === 'asc' ? 'desc' : 'asc'; }}>Name</th>
        <th on:click={() => { sortBy = 'email'; sortDirection = sortDirection === 'asc' ? 'desc' : 'asc'; }}>Email</th>
        <th on:click={() => { sortBy = 'age'; sortDirection = sortDirection === 'asc' ? 'desc' : 'asc'; }}>Age</th>
      </tr>
    </thead>
    <tbody>
      {#each users as user}
        <tr>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.age}</td>
        </tr>
      {/each}
    </tbody>
  </table>
  