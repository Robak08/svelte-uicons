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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23 20a1 1 0 0 0-1 1c0 .344-.682 1-1.75 1a2.023 2.023 0 0 1-1.593-.689 1.932 1.932 0 0 1 .128-.184 12.152 12.152 0 0 0 3.156-6.183A3 3 0 0 0 20 11.584V9a4 4 0 0 0-4-4V4a4 4 0 0 0-8 0v1a4 4 0 0 0-4 4v2.571a3 3 0 0 0-1.972 3.373 12.188 12.188 0 0 0 3.187 6.183 1.973 1.973 0 0 1 .133.189A2.005 2.005 0 0 1 3.75 22C2.661 22 2 21.306 2 21a1 1 0 0 0-2 0c0 1.626 1.718 3 3.75 3a4.212 4.212 0 0 0 2.763-1 4.295 4.295 0 0 0 5.487.016A4.317 4.317 0 0 0 17.5 23a4.208 4.208 0 0 0 2.746 1C22.282 24 24 22.626 24 21a1 1 0 0 0-1-1ZM10 4a2 2 0 0 1 4 0v1h-4ZM8 7h8a2 2 0 0 1 2 2v1.92l-5.052-1.658a3.026 3.026 0 0 0-1.891 0L6 10.913V9a2 2 0 0 1 2-2Zm1.25 15a1.938 1.938 0 0 1-1.711-.849 5.113 5.113 0 0 0-.848-1.372A10.253 10.253 0 0 1 4 14.607a1.018 1.018 0 0 1 .662-1.153L11 11.383V21c0 .344-.682 1-1.75 1Zm5.5 0c-1.089 0-1.75-.694-1.75-1v-9.616l6.305 2.069a1.021 1.021 0 0 1 .666 1.155 10.2 10.2 0 0 1-2.662 5.171 4.991 4.991 0 0 0-.848 1.378A1.929 1.929 0 0 1 14.75 22Z"/></svg>
  