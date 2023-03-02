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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M11 4c-.26 0-.51-.1-.71-.29a.996.996 0 0 1 0-1.41l1-1a.996.996 0 1 1 1.41 1.41l-1 1c-.2.2-.45.29-.71.29Zm-5.29-.29a.996.996 0 0 0 0-1.41l-1-1A.996.996 0 1 0 3.3 2.71l1 1c.2.2.45.29.71.29s.51-.1.71-.29ZM9 2V1c0-.55-.45-1-1-1S7 .45 7 1v1c0 .55.45 1 1 1s1-.45 1-1Zm15 6c0-1.1-.9-2-2-2s-2 .9-2 2l.03 8.46c0 2.09-.84 4.11-2.38 5.52-.09.09-.17.15-.21.17-.47.29-.62.91-.33 1.38a.99.99 0 0 0 1.37.32c.46-.29.89-.63 1.34-1.08l2.51-2.96a7.024 7.024 0 0 0 1.65-4.09v.02l.01-7.75Zm-6 0c0-1.1-.9-2-2-2s-2 .9-2 2v1.85L9.56 5.41a1.49 1.49 0 0 0-2.12 0 1.49 1.49 0 0 0 0 2.12l3.43 3.43a.638.638 0 0 1-.95.82L4.56 6.41a1.49 1.49 0 0 0-2.12 0 1.49 1.49 0 0 0 0 2.12l5.43 5.43a.638.638 0 0 1-.95.82l-4.36-4.37a1.49 1.49 0 0 0-2.12 0 1.49 1.49 0 0 0 0 2.12l4.36 4.36c.19.25.18.61-.05.84-.21.21-.53.24-.77.1l-1.42-1.42c-.58-.59-1.54-.59-2.12 0s-.59 1.54 0 2.12l2.93 2.93C5.06 23.15 7.28 24 9.5 24s4.44-.84 6.13-2.54A8.033 8.033 0 0 0 18 15.74V7.99Z"/></svg>
  