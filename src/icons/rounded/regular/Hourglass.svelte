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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M17 24H7.005a4.02 4.02 0 0 1-3.045-1.4 3.945 3.945 0 0 1-.916-3.158A12.517 12.517 0 0 1 7.445 12a12.517 12.517 0 0 1-4.4-7.444A3.945 3.945 0 0 1 3.96 1.4 4.02 4.02 0 0 1 7.005 0H17a4.017 4.017 0 0 1 3.044 1.4 3.943 3.943 0 0 1 .918 3.155A12.556 12.556 0 0 1 16.551 12a12.557 12.557 0 0 1 4.406 7.448 3.944 3.944 0 0 1-.918 3.156A4.017 4.017 0 0 1 17 24zm0-22H7.005a2.014 2.014 0 0 0-1.528.7 1.917 1.917 0 0 0-.455 1.556c.375 2.5 1.922 4.84 4.6 6.957a1 1 0 0 1 0 1.568c-2.678 2.119-4.222 4.461-4.6 6.96a1.917 1.917 0 0 0 .455 1.559 2.014 2.014 0 0 0 1.528.7H17a2.014 2.014 0 0 0 1.528-.7 1.917 1.917 0 0 0 .456-1.554c-.373-2.487-1.92-4.829-4.6-6.962a1 1 0 0 1 0-1.564c2.681-2.133 4.228-4.475 4.6-6.963a1.916 1.916 0 0 0-.461-1.557A2.014 2.014 0 0 0 17 2z"/></svg>
  