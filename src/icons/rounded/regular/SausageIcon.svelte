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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20.83 3.36C21.816 2.73 22.8.207 21 0a1 1 0 0 0-1 1 1 1 0 0 1-2 0 1 1 0 0 0-1-1c-1.8.207-.817 2.723.165 3.356A4.925 4.925 0 0 0 14 7.905c-.056 2.2-3.616 5.929-6.081 6.111a5.008 5.008 0 0 0-4.566 3.148C2.723 16.182.206 15.2 0 17a1 1 0 0 0 1 1 1 1 0 0 1 0 2 1 1 0 0 0-1 1c.208 1.8 2.727.816 3.359-.169 1.955 4.906 9.267 3.965 15.51-1.946C24.83 12.63 25.724 5.333 20.83 3.36Zm-3.373 14.109C13.155 21.761 8.82 22 8 22a3 3 0 1 1 .073-5.989c3.386-.181 7.908-4.877 7.928-8.055a3 3 0 0 1 6 .073c-.001.82-.22 5.127-4.544 9.44Z"/></svg>
  