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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12.587 7 4.1 15.485 7.242 3.712a4.98 4.98 0 0 1 .636-1.42Zm4.7 6.757a4.98 4.98 0 0 0 1.42-.636L14 8.415 5.52 16.9Zm2.842-2.042A4.976 4.976 0 0 0 21 8.927V5a4.973 4.973 0 0 0-.832-2.752L15.415 7ZM16 0h-3.927a4.976 4.976 0 0 0-2.789.87L14 5.587 18.754.834A4.962 4.962 0 0 0 16 0Zm8 21.5V23a1 1 0 0 1-2 0v-1.6a3.347 3.347 0 0 0-2.88-3.379 3.228 3.228 0 0 0-2.7.973A15.143 15.143 0 0 1 5.613 24H3.627a3.423 3.423 0 0 1-3.3-1.743 3.081 3.081 0 0 1 .594-3.585l2.377-2.379a1 1 0 0 1 1.416 0 1 1 0 0 1 0 1.412L2.33 20.086A1.121 1.121 0 0 0 3.123 22h1.151a15.923 15.923 0 0 0 10.888-4.571A5.207 5.207 0 0 1 18.9 16a5.507 5.507 0 0 1 5.1 5.5Z"/></svg>
  