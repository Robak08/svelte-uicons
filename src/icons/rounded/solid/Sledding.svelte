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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23.9 21.729a3.889 3.889 0 0 1-5.24 1.877L.566 14.9a1 1 0 0 1 .868-1.8l18.093 8.7a1.894 1.894 0 0 0 2.572-.939 1 1 0 0 1 1.8.865ZM16 2.5A2.5 2.5 0 1 1 18.5 5 2.5 2.5 0 0 1 16 2.5ZM3 5a1 1 0 0 1 1-1h7.927a4.991 4.991 0 0 1 2.691.786s1.454.936 1.5.98a3.105 3.105 0 0 1 .127 4.211L13.615 14h1.767a3.015 3.015 0 0 1 2.933 2.373l.3 1.418a1 1 0 0 1-.768 1.187 1.013 1.013 0 0 1-.21.022 1 1 0 0 1-.977-.791l-.3-1.418a1 1 0 0 0-.978-.791H11a3 3 0 0 1-2.29-4.939L11.974 6H4a1 1 0 0 1-1-1Z"/></svg>
  