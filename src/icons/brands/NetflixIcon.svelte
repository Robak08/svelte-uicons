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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M18.535 14.627c.337.026.674.054 1.011.083V8.776h-1.011v5.851zM2.277 12.425.961 8.776H0v6.448c.336-.048.673-.094 1.011-.138V11.58l1.17 3.362a81.24 81.24 0 0 1 1.106-.121V8.776h-1.01v3.649zm1.982 2.302a86.353 86.353 0 0 1 2.807-.209v-.996c-.601.035-1.2.076-1.797.123v-1.508c.392-.004.908-.016 1.365-.01v-.996c-.365-.001-.952.005-1.365.01v-1.36h1.797V8.777H4.259v5.95zm3.455-4.946h1.058v4.657c.336-.013.673-.023 1.011-.032V9.781h1.058V8.776H7.714v1.005zm3.775 4.598H12.5V12.08h1.37v-.996H12.5V9.781h1.811V8.777H11.49v5.602zM24 8.776h-1.11l-.732 1.696-.658-1.696h-1.093l1.175 3.031-1.283 2.973c.355.035.709.072 1.062.111l.746-1.729.739 1.906c.385.049.769.101 1.152.156l.002-.001-1.317-3.396L24 8.776zm-8.032 0h-1.011v5.652c.918.032 1.833.078 2.744.139v-.996a90.059 90.059 0 0 0-1.733-.098V8.776z"/></svg>
  