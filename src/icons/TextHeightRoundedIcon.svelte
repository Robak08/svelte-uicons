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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-text-height {customClass}"><path d="M12 2v21c0 .55-.45 1-1 1s-1-.45-1-1V2H5C3.35 2 2 3.35 2 5v1c0 .55-.45 1-1 1s-1-.45-1-1V5c0-2.76 2.24-5 5-5h12c2.76 0 5 2.24 5 5v1c0 .55-.45 1-1 1s-1-.45-1-1V5c0-1.65-1.35-3-3-3h-5Zm9.75 17.25L20 21v-9l1.75 1.75c.2.2.45.29.71.29s.51-.1.71-.29a.996.996 0 0 0 0-1.41l-2.75-2.75a1.96 1.96 0 0 0-1.4-.58H19c-.51 0-1.01.2-1.4.58l-2.75 2.75a.996.996 0 1 0 1.41 1.41L18.01 12v9l-1.75-1.75a.996.996 0 1 0-1.41 1.41l2.75 2.75c.39.39.9.58 1.4.58.51 0 1.02-.2 1.4-.58l2.75-2.75a.996.996 0 1 0-1.41-1.41Z"/></svg>
  