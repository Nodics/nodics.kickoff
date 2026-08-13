const result = db.adminCommand({ ping: 1 });
if (!result.ok) quit(1);
