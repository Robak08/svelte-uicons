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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><g transform="translate(-193.633 -276.362) translate(119 276.362)"><path d="m78.131 4.717 1.547 17.356L86.623 24l6.963-1.93 1.549-17.353H78.131zm3.164 3.547h5.33v2.129h-5.137l-.193-2.129zm5.338 6.437h2.614L89 17.462l-2.367.639v-3.4zm0-2.128v-2.18h2.992l-.194 2.18h-2.798zm-4.954 0h4.947v2.129H81.87l-.191-2.129zm10.58 8.392-5.626 1.56v-2.209l-.01.003-4.36-1.211-.298-3.342h2.137l.152 1.698 2.37.64h.002v2.214l.007-.002 4.357-1.208.968-10.844h-5.325V6.135h6.95l-1.324 14.83z"/><path d="M91.958 8.264 90.99 19.108 86.633 20.315 86.633 18.101 89 17.462 89.247 14.701 86.633 14.701 86.633 12.573 89.431 12.573 89.625 10.393 86.633 10.393 86.633 8.264z"/><path d="M86.626 12.573H86.63300000000001V14.702H86.626z"/><path d="M86.626 8.264H86.63300000000001V10.392999999999999H86.626z"/><path d="M86.625 18.102H86.633V20.316H86.625z"/><path d="M82.133 0h2.578v1.078h-1.5v1.078h1.5v1.078h-2.578V0zM85.227 0h2.578v.938h-1.5v.188h1.5v2.156h-2.578v-.985h1.5v-.188h-1.5V0zM88.32 0h2.578v.938h-1.5v.188h1.5v2.156H88.32v-.985h1.5v-.188h-1.5V0z"/><path d="M91.958 8.264 90.99 19.108 86.633 20.315 86.626 20.317 86.626 18.103 86.633 18.101 89 17.462 89.247 14.701 86.626 14.701 86.626 12.573 89.431 12.573 89.625 10.393 86.626 10.393 86.626 8.264z"/></g></svg>
  