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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M21 9a4.011 4.011 0 0 0-6-3.45V3a3 3 0 0 0-3-3H8a1 1 0 0 0 0 2h1v6c-.387 1.593-3.718 3.386-4.81 5H17a4 4 0 0 0 4-4Zm-5.9-.646a2 2 0 1 1 2.54 2.531 11.565 11.565 0 0 1-2.54-2.531ZM20.858 15c.816 3.661-2.882 9.078-6.59 9H9.732c-3.712.076-7.4-5.334-6.59-9Z"/></svg>
  