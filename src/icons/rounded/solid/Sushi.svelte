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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M4.5 11c.067 1.293 7.938 1.291 8 0-.067-1.293-7.938-1.291-8 0Zm7-6c.067 1.293 7.938 1.291 8 0-.067-1.293-7.938-1.291-8 0Zm-3 1C3.733 6 0 8.2 0 11v8c.162 6.6 16.839 6.6 17 0v-8c0-2.8-3.733-5-8.5-5Zm0 2c8.572.227 8.572 5.774 0 6-8.572-.227-8.572-5.774 0-6ZM24 5v8c0 2.059-2.015 3.8-5 4.569V11a5.351 5.351 0 0 0-1.112-3.224C24.743 6.326 22.182 2.023 15.5 2c-2.96 0-5.22.945-6.1 2.028a15.806 15.806 0 0 0-2.252.03C8.812-1.6 23.83-1.262 24 5Z"/></svg>
  