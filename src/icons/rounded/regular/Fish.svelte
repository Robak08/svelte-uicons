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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M6 19a1 1 0 0 1-2 0 1 1 0 0 1 2 0ZM23.73 7.625A2.482 2.482 0 0 1 21.5 9h-4.519a41.471 41.471 0 0 1-.149 3h.368a2.746 2.746 0 0 1 2.765 3.188A3.288 3.288 0 0 1 16.729 18H15.4c-1.8 3.889-7.4 6-11.413 6a4 4 0 0 1-3.978-4.257A16.833 16.833 0 0 1 2 12.133V11.6a7.708 7.708 0 0 1 6.317-7.554 3.115 3.115 0 0 1 2.537.693A3.213 3.213 0 0 1 12 7.168c.93-.086 1.941-.129 3-.149V2.5a2.5 2.5 0 0 1 4-2 4.861 4.861 0 0 1 1.833 2.663A4.861 4.861 0 0 1 23.5 5a2.5 2.5 0 0 1 .23 2.625ZM4.385 9.541A13.235 13.235 0 0 1 10 7.432V7.2a1.218 1.218 0 0 0-.435-.933 1.085 1.085 0 0 0-.9-.253 5.615 5.615 0 0 0-4.28 3.527ZM8.783 21.2A8.037 8.037 0 0 0 2.8 15.222 20.059 20.059 0 0 0 2 19.88 2 2 0 0 0 4.12 22a20.03 20.03 0 0 0 4.663-.8Zm6.209-12.192c-6.239.107-9.639 1.264-11.4 4.362a10.045 10.045 0 0 1 7.04 7.039c3.096-1.763 4.253-5.162 4.36-11.401ZM16.568 14a18.72 18.72 0 0 1-.445 2h.606a1.281 1.281 0 0 0 1.261-1.094.754.754 0 0 0-.79-.906ZM21.9 6.189a2.99 2.99 0 0 0-2.06-1.2 1 1 0 0 1-.821-.821 2.988 2.988 0 0 0-1.2-2.06.5.5 0 0 0-.537-.049A.477.477 0 0 0 17 2.5V7h4.5a.477.477 0 0 0 .445-.273.5.5 0 0 0-.045-.538Z"/></svg>
  