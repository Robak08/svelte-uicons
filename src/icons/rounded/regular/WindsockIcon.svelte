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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M3 24a1 1 0 0 1-1-1V5.829A3.007 3.007 0 0 1 3 0a3.014 3.014 0 0 1 1.86 5.352L21.588 8.7A3.007 3.007 0 0 1 24 11.64v1.72a3.007 3.007 0 0 1-2.412 2.94L4 19.82V23a1 1 0 0 1-1 1ZM4 7.22v10.56l2-.4V7.62Zm4 .8v8.96l2-.4V8.42Zm4 .8v7.36l2-.4V9.22Zm4 .8v5.76l2-.4v-4.96Zm4 .8v4.162l1.2-.24a1 1 0 0 0 .8-.981V11.64a1 1 0 0 0-.8-.981ZM3 2a1 1 0 0 0 0 2 1 1 0 0 0 0-2Z"/></svg>
  