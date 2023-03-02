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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M14 24a1 1 0 0 1-.929-1.372l2-5a1 1 0 0 1 1.858.744l-2 5A1 1 0 0 1 14 24Zm-3.071-.628 2-5a1 1 0 0 0-1.858-.744l-2 5a1 1 0 0 0 .557 1.3A1.015 1.015 0 0 0 10 24a1 1 0 0 0 .929-.628Zm-4 0 2-5a1 1 0 1 0-1.858-.744l-2 5a1 1 0 0 0 .557 1.3A1.015 1.015 0 0 0 6 24a1 1 0 0 0 .929-.628ZM24 12.5a7.508 7.508 0 0 1-5.452 7.2l.238-.595A2.987 2.987 0 0 0 14 15.774a2.944 2.944 0 0 0-4 0 2.973 2.973 0 0 0-4.787 1.106L4.049 19.8A5.539 5.539 0 0 1 1.8 10.425a.994.994 0 0 0 .345-.9 8.153 8.153 0 0 1-.033-2.89A7.945 7.945 0 0 1 8.5.133a8.058 8.058 0 0 1 8.734 4.439 1.04 1.04 0 0 0 .743.569A7.515 7.515 0 0 1 24 12.5ZM16 9a1 1 0 0 0-1-1h-1.774l.882-1.539a1 1 0 1 0-1.734-1L11.5 6.989l-.873-1.523a1 1 0 0 0-1.735 1L9.774 8H8a1 1 0 0 0 0 2h1.774l-.882 1.539a1 1 0 0 0 1.735 1l.873-1.523.874 1.523a1 1 0 1 0 1.734-1L13.226 10H15a1 1 0 0 0 1-1Z"/></svg>
  