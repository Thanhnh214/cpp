execute_process(COMMAND "/home/flake/catkin_ws/build/rtabmap_ros/rtabmap_python/catkin_generated/python_distutils_install.sh" RESULT_VARIABLE res)

if(NOT res EQUAL 0)
  message(FATAL_ERROR "execute_process(/home/flake/catkin_ws/build/rtabmap_ros/rtabmap_python/catkin_generated/python_distutils_install.sh) returned error code ")
endif()
