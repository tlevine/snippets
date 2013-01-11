/* The SOPHAS application (https://portal.sophas.org)
   requires that your GRE Writing score be an integer.
   My GRE writing score is not an integer.

   Fortunately, they didn't validate their form server-side.

   Run this in the Javascript console before clicking
   "Save" on the GRE scores page in order to allow
   non-integer GRE writing scores
*/
a_formats.integer=a_formats.real;
