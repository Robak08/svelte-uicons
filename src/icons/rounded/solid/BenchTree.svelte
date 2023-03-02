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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M15 13.5c0-1.93-1.57-3.5-3.5-3.5h-8C1.57 10 0 11.57 0 13.5c0 1.391.822 2.585 2 3.149V19H1a1 1 0 1 0 0 2h1v2a1 1 0 1 0 2 0v-2h7v2a1 1 0 1 0 2 0v-2h1a1 1 0 1 0 0-2h-1v-2.351a3.495 3.495 0 0 0 2-3.149ZM4 19v-2h7v2H4Zm19.544-8.839a3.99 3.99 0 0 1 .297 2.966c-.523 1.849-2.343 3.05-4.32 2.851-.242-.024-.344.032-.399.081a.39.39 0 0 0-.122.302v6.64a1 1 0 1 1-2 0V13.5a5.478 5.478 0 0 0-4.23-5.353 1.002 1.002 0 0 1-.764-1.087c.094-.821.667-1.604 1.703-2.327.271-.189.294-.521.292-.656a4.038 4.038 0 0 1 .306-1.61 3.944 3.944 0 0 1 2.637-2.33 4.163 4.163 0 0 1 2.143.008 3.944 3.944 0 0 1 2.61 2.326c.214.531.316 1.075.303 1.62-.003.161.03.459.294.645a3.984 3.984 0 0 1 1.707 3.265c0 .589-.138 1.177-.41 1.749-.104.218-.096.306-.096.307.003.016.032.069.05.105Z"/></svg>
  