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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20.4 10.625c-.715-2.048-2.239-3.7-5.343-4.335a4.461 4.461 0 0 1 2.39-3.39 1 1 0 0 0-.894-1.79A6.53 6.53 0 0 0 13 6.037V1a1 1 0 0 0-2 0v5.037a6.53 6.53 0 0 0-3.553-4.932A1 1 0 1 0 6.553 2.9a4.461 4.461 0 0 1 2.393 3.4C3.794 7.345 3 11.2 3 15c0 3.456.661 6.963 4.665 8.361a.973.973 0 0 0 .226.077C16.4 25.439 21.33 22.247 21 15a12.1 12.1 0 0 0-.6-4.375ZM16.2 8.7a4.114 4.114 0 0 1 2.149 2.128l-2.8 2.8-2.138-2.138Zm-2.066 6.343L12 17.18l-2.141-2.139L12 12.9ZM12 8a15.689 15.689 0 0 1 1.96.112L12 10.075l-1.965-1.963A15.773 15.773 0 0 1 12 8Zm-4.206.7 2.79 2.79-2.139 2.137-2.8-2.8A4.11 4.11 0 0 1 7.794 8.7ZM5.1 16.972a19.249 19.249 0 0 1-.008-3.87l1.938 1.939Zm2.753 4.352a4.12 4.12 0 0 1-2.181-2.1l2.772-2.773 2.138 2.139ZM12 22a15.884 15.884 0 0 1-1.889-.105L12 20.008l1.884 1.892A15.809 15.809 0 0 1 12 22Zm4.143-.675-2.732-2.731 2.139-2.139 2.775 2.776a4.119 4.119 0 0 1-2.182 2.094Zm2.757-4.349-1.935-1.935 1.942-1.941a19.329 19.329 0 0 1-.007 3.876Z"/></svg>
  