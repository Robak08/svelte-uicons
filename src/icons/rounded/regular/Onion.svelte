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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 13c0-5.675-4.866-8.712-8-9.745A3.026 3.026 0 0 0 13 0h-2a3.026 3.026 0 0 0-3 3.255C-1.667 6.134-3.988 19.441 9.056 21.761l-.611.407A1.006 1.006 0 0 0 9 24c.447.066 1.627-.94 2-1.132a1.006 1.006 0 1 0 2 0c.381.2 1.546 1.2 2 1.132a1.006 1.006 0 0 0 .556-1.832l-.611-.407C20.4 20.876 24 17.525 24 13ZM10 3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1a1.058 1.058 0 0 0 .291.706A14.422 14.422 0 0 1 18 14a5.579 5.579 0 0 1-2.614 4.821c2.074-5.833-1.453-12.669-2.679-13.528a1 1 0 0 0-1.414 0c-1.228.862-4.753 7.7-2.679 13.528C2.69 15.092 8.468 5.562 9.707 4.707A1.062 1.062 0 0 0 10 4Zm0 12a13.451 13.451 0 0 1 2-7.354A13.451 13.451 0 0 1 14 15c0 2.088-.761 5-2 5s-2-2.912-2-5Zm-8-2a7.694 7.694 0 0 1 4.072-6.644C4.4 8.989 2.8 15.252 5.362 18.4A6.088 6.088 0 0 1 2 13Zm16.638 5.4c2.561-3.146.958-9.4-.71-12.039C22.3 8.635 24 15.494 18.638 18.4Z"/></svg>
  