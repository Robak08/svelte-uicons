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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M8.592 2.446c0-.326.033-.522.587-.522h7.467c1.304 0 2.022 1.109 2.543 3.196l.424 1.663h1.272C21.114 2.054 21.31 0 21.31 0s-3.196.359-5.087.359H6.668L1.548.196v1.37l1.728.326c1.207.228 1.5.489 1.598 1.598 0 0 .098 3.261.098 8.641s-.098 8.609-.098 8.609c0 .978-.391 1.337-1.598 1.565l-1.727.325V24l5.12-.163h8.543c1.924 0 6.391.163 6.391.163.098-1.174.75-6.489.848-7.076h-1.207l-1.272 2.902c-1.011 2.283-2.478 2.446-4.109 2.446h-4.859c-1.63 0-2.413-.652-2.413-2.054v-7.435s3.62 0 4.793.098c.913.065 1.467.326 1.761 1.598l.391 1.696h1.402l-.098-4.272.196-4.304h-1.402l-.457 1.891c-.293 1.239-.489 1.467-1.761 1.598-1.663.163-4.826.13-4.826.13V2.446z"/></svg>
  