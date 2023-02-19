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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-signal-stream {customClass}"><path d="M12 10c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2Zm8.49 10.49c4.68-4.68 4.68-12.29 0-16.97a.996.996 0 1 0-1.41 1.41c3.9 3.9 3.9 10.24 0 14.14a.996.996 0 0 0 .71 1.7c.26 0 .51-.1.71-.29Zm-3.54-3.54C18.27 15.63 19 13.87 19 12s-.73-3.63-2.05-4.95a.996.996 0 1 0-1.41 1.41C16.48 9.4 17 10.66 17 12s-.52 2.59-1.46 3.54a.996.996 0 0 0 .71 1.7c.26 0 .51-.1.71-.29ZM4.93 20.49a.996.996 0 0 0 0-1.41c-3.9-3.9-3.9-10.24 0-14.14a.996.996 0 1 0-1.41-1.41c-4.68 4.66-4.68 12.28-.01 16.96.2.2.45.29.71.29s.51-.1.71-.29Zm3.54-3.54a.996.996 0 0 0 0-1.41 5.003 5.003 0 0 1 0-7.07.996.996 0 1 0-1.41-1.41 7.007 7.007 0 0 0 0 9.9c.2.2.45.29.71.29s.51-.1.71-.29Z"/></svg>
  