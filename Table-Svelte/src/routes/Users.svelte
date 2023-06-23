<!-- 
<script>
    import { onMount } from 'svelte';
  
    let users = [];
  
    
    async function fetchUsers() {
      const response = await fetch('/api/users.json');
      users = await response.json();
    }
  
   
    onMount(fetchUsers);
</script>
  
  <h1>Users</h1>
  
  {#if users.length > 0}
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
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
  {:else}
    <p>Loading...</p>
  {/if}


<style>
    table {
      border-collapse: collapse;
      width: 100%;
    }
  
    th, td {
      border: 1px solid #ccc;
    }
</style>  
   -->