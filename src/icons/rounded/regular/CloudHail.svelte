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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19 19.5a1 1 0 0 1-.385-1.923c4.967-2.007 4.218-9.47-1.032-10.473a3.011 3.011 0 0 1-2.158-1.672A6 6 0 0 0 4.086 6.967a6.142 6.142 0 0 0 .024 2.181 3.005 3.005 0 0 1-.964 2.762 3.523 3.523 0 0 0 .41 5.5 1 1 0 1 1-1.112 1.662A5.535 5.535 0 0 1 1.8 10.43a1 1 0 0 0 .345-.9 8.147 8.147 0 0 1-.033-2.889A7.946 7.946 0 0 1 8.5.137a8.062 8.062 0 0 1 8.735 4.44 1.036 1.036 0 0 0 .742.569c7.187 1.424 8.193 11.484 1.411 14.278A.992.992 0 0 1 19 19.5ZM7 15a1 1 0 0 0 2 0 1 1 0 0 0-2 0Zm4 0a1 1 0 0 0 2 0 1 1 0 0 0-2 0Zm4 0a1 1 0 0 0 2 0 1 1 0 0 0-2 0Zm-9 4a1 1 0 0 0 2 0 1 1 0 0 0-2 0Zm4 0a1 1 0 0 0 2 0 1 1 0 0 0-2 0Zm4 0a1 1 0 0 0 2 0 1 1 0 0 0-2 0Zm-9 4a1 1 0 0 0 2 0 1 1 0 0 0-2 0Zm4 0a1 1 0 0 0 2 0 1 1 0 0 0-2 0Zm4 0a1 1 0 0 0 2 0 1 1 0 0 0-2 0Z"/></svg>
  