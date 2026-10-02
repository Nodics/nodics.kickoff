/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */

/**
 * @module nodics.kickoff/config/properties
 * @description Keeps customer employee-mail composition unselected by default.
 * @owner nodics.kickoff
 * @layer configuration
 * @override A sending deployment must deliberately select employee mail;
 * selection does not enable SMTP or grant Profile registration authority.
 */
module.exports = {
  activeModules: { compositions: { employeeMail: { selection: 'none' } } }
};
