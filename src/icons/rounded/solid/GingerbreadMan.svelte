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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M21.7 7.277a2.578 2.578 0 0 0-3.112-1.129l-2.846.886a.443.443 0 0 1-.485-.689 4.006 4.006 0 1 0-6.5 0 .443.443 0 0 1-.485.689l-2.855-.886a2.5 2.5 0 1 0-1.734 4.691l1.6.661c2.106.745 2.021 3.561 1.023 5.175l-1.879 3.386a2.5 2.5 0 1 0 4.147 2.794L11.43 18.3a.688.688 0 0 1 1.14 0l2.856 4.552a2.5 2.5 0 1 0 4.147-2.794L17.7 16.675c-1-1.613-1.083-4.43 1.023-5.175l1.6-.661A2.516 2.516 0 0 0 21.7 7.277ZM12 16a1.5 1.5 0 0 1 0-3 1.5 1.5 0 0 1 0 3Zm0-4a1.5 1.5 0 0 1 0-3 1.5 1.5 0 0 1 0 3Z"/></svg>
  