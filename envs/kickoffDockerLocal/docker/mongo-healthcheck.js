/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module envs/kickoffDockerLocal/docker/mongo-healthcheck
 * @description Defines Kickoff project-owned JavaScript configuration for this boundary.
 * @layer module
 * @owner docker
 * @override Customer projects may extend or replace this artifact in their own project layer.
 */

const result = db.adminCommand({ ping: 1 });
if (!result.ok) quit(1);
