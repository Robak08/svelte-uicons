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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M18 24H9a8.945 8.945 0 0 1-6.364-2.636A8.943 8.943 0 0 1 0 15V9a1 1 0 1 1 2 0v6a6.95 6.95 0 0 0 2.05 4.949A6.957 6.957 0 0 0 9 22h9a1 1 0 1 1 0 2Zm3-13c0 1.103.897 2 2 2a1 1 0 0 1 1 1v1c0 2.757-2.243 5-5 5H9c-2.757 0-5-2.243-5-5V7c0-2.757 2.243-5 5-5h10c2.757 0 5 2.243 5 5v1a1 1 0 0 1-1 1c-1.103 0-2 .897-2 2Zm-4 0a1 1 0 0 0-1-1h-1.5l-1.929-2.421A1.111 1.111 0 0 0 11.596 7h-.117a.543.543 0 0 0-.505.742L11.865 10h-1.423l-1.11-.772a.78.78 0 0 0-1.228.939l1.096 1.3a1.5 1.5 0 0 0 1.147.533h1.501l-.879 2.26a.543.543 0 0 0 .506.74h.138c.407 0 .781-.222.975-.579L14.499 12h1.5a1 1 0 0 0 1-1Z"/></svg>
  