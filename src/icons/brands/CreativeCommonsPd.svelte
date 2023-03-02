<script>
  export let size = "100%";
  export let strokeWidth = 0;
  let customClass = "";
  export { customClass as class };
  
  if (size !== "100%") {
    size = size.slice(-1) === 'x' 
    ? size.slice(0, size.length -1) + 'em'
    : parseInt(size) + 'px';
  }
  </script>
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 21.75c-5.376 0-9.75-4.374-9.75-9.75 0-1.125.194-2.206.547-3.212l3.813 1.698a8.04 8.04 0 0 0-.158 1.592c0 4.791 3.576 6.14 5.826 6.14a5.847 5.847 0 0 0 3.374-1.057c.171-.122.326-.246.468-.371l-1.749-2.126a1.914 1.914 0 0 1-.16.164c-.68.645-1.428.645-1.595.645-1.83 0-2.597-1.931-2.607-3.478 0 0 10.533 4.681 10.543 4.684C18.891 19.7 15.681 21.75 12 21.75zM10.556 9.653c.391-.708 1.014-1.241 1.945-1.241.54 0 .968.179 1.305.405.14.101.262.202.364.304l1.954-2.011c-1.312-1.128-2.804-1.33-3.78-1.33-2.293 0-3.916.991-4.872 2.496L3.848 6.66A9.747 9.747 0 0 1 12 2.249c5.376 0 9.751 4.373 9.751 9.751 0 .87-.117 1.713-.331 2.516-.01-.009-10.864-4.863-10.864-4.863z"/></svg>
  